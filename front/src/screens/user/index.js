import React, {useEffect, useState} from 'react';
import QRCode from "react-qr-code";

import {ethers} from "ethers";
import {privateKeyUser} from "../../private";
import {abi} from "../../abi/abi";

const Ticket = ({ ticketId, contract }) => {
    const [ticketData, setTicketData] = useState(null);

    const getTicketsData = async () => {
        const promise = await contract.functions.getTicket(ticketId);
        const ticket = promise[0];

        setTicketData({
            used: ticket.used
        })
    }

    useEffect(() => {
        getTicketsData();
    },[]);

    return (
        <div style={{ margin: 32 }}>
            <QRCode value={ticketId} title={ticketId} />
            <div style={{ fontSize: 12, margin: 16 }}>
                {ticketId}
            </div>
            {
                ticketData && (
                    <div style={{ fontSize: 12, margin: 16 }}>
                        Valide : {ticketData.used ? 'Non' : 'Oui'}
                    </div>
                )
            }
        </div>
    )
}

export const User = () => {
    const provider = ethers.getDefaultProvider('ropsten');
    const address  = '0xFAb15a1da28889810FC3ceC288087f908eBa18ea';
    const wallet = new ethers.Wallet(privateKeyUser,provider);
    const contract = new ethers.Contract(address,abi,wallet);

    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        const promise = await contract.functions.getOwnTickets();

        setTickets(promise[0])
    }

    useEffect(() => {
        getTickets();
    },[]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100%', minHeight: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', margin: 32 }}>
                Utilisateur
            </div>
            <div style={{ height: 32, borderRadius: 16, backgroundColor: "#1A8CD8", color: 'white', fontSize: 12, padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                {wallet.address}
            </div>
            <div style={{ height: 400, width: '100%' }}>
                {
                    tickets.length > 0 && tickets?.map((mappedTicket) => (
                        <Ticket ticketId={mappedTicket} contract={contract} />
                    ))
                }
            </div>
        </div>
    )
}