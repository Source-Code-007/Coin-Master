import { FaAndroid, FaApple, FaCheck, FaLinux, FaWindows } from "react-icons/fa";
import useStoreData from "../../Hooks/useStoreData";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LuSettings } from "react-icons/lu";
import CountUp from 'react-countup';

const Homepage = () => {
    const { myStoredData, setMyStoredData } = useStoreData()
    const [searching, setSearching] = useState(false);
    const [foundUser, setFoundUser] = useState(null);
    const [coinPageVisible, setIsCoinPageVisible] = useState(null);
    const [finalLoadingStatus, setFinalLoadingStatus] = useState({ status: null, progress: null })
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async form => {
        const { userName } = form
        setMyStoredData({ ...myStoredData, user: userName })

        setSearching(true);
        // Simulate searching for 3 seconds
        await new Promise(resolve => setTimeout(resolve, 4000));
        setSearching(false);


        setFoundUser(true)

        // Simulate user found for 1 seconds
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFoundUser(false)
        setIsCoinPageVisible(true)

    };

    const coinSubmitFunc = async (e) => {
        e.stopPropagation()
        setIsCoinPageVisible(null)

        console.log('Coin submit');



        setFinalLoadingStatus({ ...finalLoadingStatus, status: 'loading' })
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFinalLoadingStatus({ status: 'Getting Ready', progress: 25 })
        await new Promise(resolve => setTimeout(resolve, 2000));
        setFinalLoadingStatus({ status: 'Adding Coin', progress: 45 })
        await new Promise(resolve => setTimeout(resolve, 5000));
        setFinalLoadingStatus({ status: 'Finalizing', progress: 80 })
        await new Promise(resolve => setTimeout(resolve, 1000));
        setFinalLoadingStatus({ status: 'Loading last step', progress: 100 })
        await new Promise(resolve => setTimeout(resolve, 2500));
        setFinalLoadingStatus({ status: null, progress: 100 })
    }


    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-8 py-8" style={{ backgroundImage: `url(${'https://d266key948fg17.cloudfront.net/uploads/16369872739c763d4d2f3aa502aaeba2891b5d8448.jpg'})` }}>
            <figure className="">
                <img src="https://d266key948fg17.cloudfront.net/uploads/16092706812cfcd4f149e83a5a4d47a8d9de077bb1.png" className="animate-pulse mx-auto" alt="" />
            </figure>

            <form onSubmit={handleSubmit(onSubmit)} className="w-6/6 md:w-4/6 xl:w-3/6 2xl:w-2/6 mx-auto shadow-xl shadow-yellow-500 px-4 md:px-10 py-8 border border-[wheat] rounded-[45px] relative mt-10 min-h-fit md:min-h-[580px]" style={{ boxShadow: '0 0 5px grey, 0 0 15px goldenrod, 0 0 20px goldenrod, 0 0 40px white, 0 0 70px goldenrod', background: 'radial-gradient( black,#404757)' }}>
                <figure className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-16 w-14 animate-spin" />
                </figure>

                {
                    !myStoredData.user && <div className="space-y-7">
                        <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-slate-200 text-center">Please enter your Coin Master Username or Email and select your platform.</h2>
                        <div className="relative">
                            <img src="https://d266key948fg17.cloudfront.net/uploads/1636988804a288ccbb279b1d36af81b92880d61cab.png" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10" />
                            <input type="text" className={`py-4 md:py-6 px-3 !pl-16 font-semibold outline-none text-[20px] md:text-[28px] rounded-[30px] w-full placeholder:font-semibold placeholder:text-slate-400 placeholder:text-[20px] md:placeholder:text-[28px] border-2 ${errors.userName ? 'border-red-500' : 'border-transparent focus:border-slate-400'}`} style={{ color: 'goldenrod', background: 'radial-gradient(black ,goldenrod )' }} placeholder="Username" {...register("userName", { required: true })} />
                        </div>

                        {/* device icons */}
                        <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3">
                            <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center ${myStoredData.device === 'apple' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'apple' })}><FaApple></FaApple></span>

                            <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center ${myStoredData.device === 'android' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'android' })}><FaAndroid></FaAndroid></span>

                            <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center ${myStoredData.device === 'linux' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'linux' })}><FaLinux></FaLinux></span>

                            <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center ${myStoredData.device === 'windows' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'windows' })}><FaWindows></FaWindows></span>

                        </div>

                        {/* Encryption checkbox */}
                        <div className="flex gap-2 justify-center items-center">
                            <input type="checkbox" className="checkbox checkbox-warning" id="encryption_protection" />
                            <label className="label-text text-slate-50 font-semibold text-lg cursor-pointer" htmlFor="encryption_protection">Encryption protection</label>
                        </div>

                        <div className="text-center">
                            <button className="my-btn-one hover:animate-pulse w-4/6 md:w-3/6" type="submit">Proceed</button>
                        </div>
                    </div>
                }

                {
                    searching && <div className="space-y-7 text-center pt-8 animate-pulse">
                        <h3 className="text-slate-200 text-2xl font-semibold">Searcing user...</h3>
                        <input value={myStoredData.user} disabled type="text" className={`py-6 px-3 font-semibold outline-none text-[28px] rounded-[30px] w-full placeholder:font-semibold placeholder:text-slate-400 placeholder:text-[28px] text-center`} style={{ color: 'goldenrod', background: 'radial-gradient(black ,goldenrod )' }} />
                        <span className={`inline-block rounded-full cursor-pointer bg-[goldenrod] text-slate-300 text-4xl p-8`}>{myStoredData.device === 'apple' ? <FaApple></FaApple> : myStoredData.device === 'linux' ? <FaLinux /> : myStoredData.device === 'android' ? <FaAndroid /> : <FaWindows />}</span>
                    </div>
                }

                {
                    foundUser && <div className="space-y-7 text-center pt-8 animate-pulse">
                        <h3 className="text-5xl font-bold text-[goldenrod]">Yeeeey! User found.</h3>
                        <span className="text-green-500 text-[80px] md:text-[120px] flex justify-center"><FaCheck></FaCheck></span>

                    </div>
                }
                {
                    coinPageVisible && <div className="space-y-7 text-center pt-8">
                        <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-slate-200 text-center">Please Select the amount of Spin.</h2>

                        <div className="w-[300px] mx-auto">

                            {/* selected amount */}
                            <div className="my-bg-one rounded-[40px] hover:active-box-shadow text-slate-100 w-full p-6 text-xl flex flex-col items-center justify-center gap-2 relative"> <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-8 w-8" /> <span><span className="text-slate-50 font-bold text-3xl">{myStoredData?.amount}</span> Spins</span>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2  px-1 text-sm py-px rounded-lg border-4 border-dotted border-[white] bg-[goldenrod]">Selected amount</div>
                            </div>

                            <div className="space-y-4">

                                <div className={`my-bg-one rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 1000 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 1000 })}> <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">1000</span> Spins</div>
                                <div className={`my-bg-one rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 3000 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 3000 })}> <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">3000</span> Spins</div>
                                <div className={`my-bg-one rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 5000 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 5000 })}> <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">5000</span> Spins</div>
                                <div className={`my-bg-one rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 9999 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 9999 })}> <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">9999</span> Spins</div>

                                <button className="my-btn-one hover:animate-bounce" type="button" onClick={coinSubmitFunc}>Proceed</button>
                            </div>

                        </div>

                    </div>
                }

                {
                    finalLoadingStatus.status && <div className="space-y-7 text-center pt-8">
                        <span className="text-slate-100 text-[65px] md:text-[90px] xl:text-[120px] flex justify-center ">
                            <LuSettings className="animate-spin"></LuSettings>
                        </span>

                        <p className="font-semibold text-slate-200 text-3xl">{finalLoadingStatus.status === 'loading' ? 'Loading...' : finalLoadingStatus.status === 'Getting Ready' ? 'Getting ready' : finalLoadingStatus.status === 'Adding Coin' ? <div>
                            Adding{' '} <span className="text-[goldenrod] font-bold"> {myStoredData.amount} </span>{' '}
                            coins for{' '} <span className="text-[goldenrod] font-bold"> {myStoredData.user} </span> </div>
                            : finalLoadingStatus.status === 'Finalizing' ? 'Finalizing' : finalLoadingStatus.status === 'Loading last step' ? 'Loading Last Step...' : ''}</p>

                        <div className="w-5/6 mx-auto">
                            <progress className="progress progress-warning w-full h-8 border border-[#646464]" value={finalLoadingStatus?.progress} max="100"></progress>
                        </div>

                    </div>
                }

                {(!finalLoadingStatus.status && finalLoadingStatus.progress === 100) &&
                    <div className="space-y-7 text-center pt-8">
                        <h2 className="font-bold text-2xl md:text-4xl xl:text-3xl text-slate-200 text-center">Last Step</h2>
                        <p className="font-semibold text-lg text-[goldenrod]">Hello <span className="font-bold text-2xl">{myStoredData.user}</span>! You are almost done. <span className="font-bold text-2xl">{myStoredData.amount}</span> Spins Will be added to your account ! Please complete the last step by click the button below.</p>

                        <div className="space-y-2 active-box-shadow rounded-[40px] animate-pulse w-3/6 mx-auto px-6 pt-3 pb-6 text-slate-100" style={{ background: 'radial-gradient( black,#404757)' }}>
                            <img src="https://d266key948fg17.cloudfront.net/uploads/160838706143055185ffaafc67a71650ee9406b0f7.png" className=" h-16 w-20 mx-auto" />
                            <div className="px-5 py-2 bg-slate-50 text-slate-600 rounded-[40px] font-bold text-2xl">{myStoredData.amount}</div>
                            <p className="font-bold text-2xl">Spins</p>
                        </div>
                        <button className="my-btn-one">Verify Now</button>

                    </div>}

            </form>

           {(finalLoadingStatus.progress>=45 && finalLoadingStatus.progress<80) &&   <div className="space-y-2 rounded-[40px] w-[250px] mx-auto px-6 pt-3 pb-6 text-slate-100 text-center border-2 border-slate-400 mt-20" style={{ background: 'radial-gradient( black,#404757)' }}>
                <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className=" h-16 w-20 mx-auto" />
                <div className="px-5 py-2 bg-slate-50 text-slate-600 rounded-[40px] font-bold text-2xl"> <CountUp enableScrollSpy='true' start={myStoredData.amount}
                    end={0} duration={'4'} /> </div>
                <p className="font-bold text-2xl">{myStoredData.user}</p>
            </div>}

        </div>
    );
};

export default Homepage;