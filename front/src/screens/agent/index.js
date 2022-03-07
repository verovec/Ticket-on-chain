import React, {useState} from 'react';
import Lottie from 'react-lottie';
import animationSuccess from './check_animation.json';
import animationLoading from './loading_animation.json';

import {ethers} from "ethers";
import {privateKeyAgent} from "../../private";
import {abi} from "../../abi/abi";

export const Agent = () => {
    const provider = ethers.getDefaultProvider('ropsten');
    const address  = '0xFAb15a1da28889810FC3ceC288087f908eBa18ea';
    const wallet = new ethers.Wallet(privateKeyAgent,provider);
    const contract = new ethers.Contract(address,abi,wallet);

    const [verifyTicket, setVerifyTicket] = useState("");
    const [ownerAddress, setOwnerAddress] = useState("");
    const [isSend, setIsSend] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onVerify = async () => {
        if (verifyTicket.length && ownerAddress.length) {
            setIsLoading(true);
            const promise = await contract.functions.scanTicket(verifyTicket, ownerAddress, {
                gasLimit: 300000,
            });
            await promise.wait();
            setIsLoading(false);
            setIsSend(true);

            setTimeout(() => {
                setIsSend(false);
                setOwnerAddress("");
                setVerifyTicket("");
            }, 1000)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', margin: 32, marginBottom: 128 }}>
                Agent
            </div>
            <div>
                {
                    !isSend ? (
                        <>
                            {
                                !isLoading ? (
                                    <>
                                        <div style={{ fontSize: 14, margin: 16 }}>
                                            Scannez le QRCode
                                        </div>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OOjs_UI_icon_camera.svg/1024px-OOjs_UI_icon_camera.svg.png" style={{ height: 80, width: 80, marginBottom: 48 }} />
                                        <div style={{ fontSize: 14, margin: 16 }}>
                                            ou insérez le billet
                                        </div>
                                        <input type="text"
                                               placeholder="Ticket"
                                               value={verifyTicket} onChange={(e) => setVerifyTicket(e.target.value)}
                                               style={{ height: 32, width: 200, borderRadius: 16 }}
                                        />
                                        <input type="text"
                                               placeholder="Adresse de l'utilisateur"
                                               value={ownerAddress} onChange={(e) => setOwnerAddress(e.target.value)}
                                               style={{ height: 32, width: 200, borderRadius: 16, margin: 16 }}
                                        />
                                    </>
                                ) : (
                                    <Lottie
                                        options={{
                                            autoplay: true,
                                            loop: true,
                                            animationData: animationLoading,
                                        }}
                                        height={400}
                                        width={400}
                                    />
                                )
                            }

                        </>
                    ) : (
                        <Lottie
                            options={{
                                autoplay: true,
                                animationData: animationSuccess,
                            }}
                            height={400}
                            width={400}
                        />
                    )
                }

            </div>
            <div style={{ margin: 48, height: 32, width: 120, backgroundColor: '#1A8CD8', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, color: 'white'}}
                 onClick={onVerify}>
                Vérifier
            </div>
        </div>
    )
}