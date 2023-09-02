import { FaAndroid, FaApple, FaCheck, FaLinux, FaWindows } from "react-icons/fa";
import useStoreData from "../../Hooks/useStoreData";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import bg1 from '/public/assets/img/bg2.png'
import { LuSettings } from "react-icons/lu";
import CountUp from 'react-countup';

const Homepage = () => {
    const { myStoredData, setMyStoredData } = useStoreData()
    const [searching, setSearching] = useState(false);
    const [foundUser, setFoundUser] = useState(null);
    const [coinPageVisible, setIsCoinPageVisible] = useState(null);
    const [finalLoadingStatus, setFinalLoadingStatus] = useState({ status: null, progress: null })
    // const [isLoading, setIsLoading] = useState(true);
    // const [loadingProgress, setLoadingProgress] = useState(0);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    // useEffect(() => {
    //     const loadingTimeout = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 3000);

    //     const progressInterval = setInterval(() => {
    //         setLoadingProgress((prevProgress) => {
    //             const newProgress = prevProgress + (100 / 3000) * 100;
    //             return newProgress >= 100 ? 100 : newProgress;
    //         });
    //     }, 100);

    //     return () => {
    //         clearTimeout(loadingTimeout);
    //         clearInterval(progressInterval);
    //     };
    // }, []);



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


    // if (isLoading) {
    //     return <div className="h-screen my-bg-one flex gap-5 flex-col items-center justify-center"><span className="text-[90px] md:text-[120px] text-white animate-spin">
    //         <LuSettings></LuSettings>
    //     </span>
    //         <progress className={`progress progress-warning w-[230px] h-8 border-2 border-white`} value={loadingProgress} max="100"></progress>
    //     </div>
    // }


    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat px-4 md:px-6 py-6" style={{ backgroundImage: `url(${bg1})` }}>
            <figure className="flex flex-col justify-center items-center">
                <img src="https://esportsbuz.co/assets/img/logo.png" className="animate-pulse w-36 md:w-48 xl:w-56" alt="" />
                <p className="tracking-[2px] font-bold text-lg md:text-xl text-slate-700">GENERATOR</p>
            </figure>

            <form onSubmit={handleSubmit(onSubmit)} className="w-6/6 md:w-4/6 xl:w-3/6 2xl:w-2/6 mx-auto shadow-xl shadow-yellow-500 px-4 md:px-10 py-8 border border-[wheat] rounded-[45px] relative mt-10 md:mt-20 xl:mt-24" style={{ boxShadow: '0 0 5px grey, 0 0 15px goldenrod, 0 0 20px goldenrod, 0 0 40px white, 0 0 70px goldenrod', background: 'radial-gradient( black,#404757)' }}>
                <figure className="absolute -top-7 left-1/2 -translate-x-1/2">
                    {/* <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-16 w-14 animate-spin" /> */}
                    <span className="bg-[#ffbd1e] h-16 w-16 flex justify-center items-center rounded-full border-4 border-[#2b2f3a] font-bold text-4xl">{coinPageVisible ? '2' : finalLoadingStatus.status? '3' : (!finalLoadingStatus.status && finalLoadingStatus.progress === 100)? '4' : '1'}</span>

                </figure>

                {
                    !myStoredData.user && <div className="space-y-7">
                        <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-slate-200 text-center">Please enter your username and select your platform.</h2>
                        <div className="relative">
                            <img src="https://d266key948fg17.cloudfront.net/uploads/1636988804a288ccbb279b1d36af81b92880d61cab.png" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10" />
                            <input type="text" className={`py-4 md:py-6 px-3 !pl-16 font-semibold outline-none text-[20px] md:text-[28px] rounded-[30px] w-full placeholder:font-semibold placeholder:text-slate-400 placeholder:text-[20px] md:placeholder:text-[28px] border-2 ${errors.userName ? 'border-red-500' : 'border-transparent focus:border-slate-400'}`} style={{ color: 'goldenrod', background: 'radial-gradient(black ,goldenrod )' }} placeholder="Username" {...register("userName", { required: true })} />
                        </div>

                        {/* device icons */}
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-3">
                                <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center relative ${myStoredData.device === 'apple' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'apple' })}><FaApple></FaApple> <input type='radio' className='h-full w-full absolute left-0 top-0 opacity-0 cursor-pointer' {...register("device", { required: true })} /> </span>

                                <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center relative ${myStoredData.device === 'android' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'android' })}><FaAndroid></FaAndroid> <input type='radio' className='h-full w-full absolute left-0 top-0 opacity-0 cursor-pointer' {...register("device", { required: true })} /></span>

                                <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center relative ${myStoredData.device === 'linux' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'linux' })}><FaLinux></FaLinux> <input type='radio' className='h-full w-full absolute left-0 top-0 opacity-0 cursor-pointer' {...register("device", { required: true })} /></span>

                                <span className={`rounded-[40px] cursor-pointer text-slate-100 text-3xl md:text-4xl p-4 md:p-8  transition duration-500 device-icon flex justify-center items-center relative ${myStoredData.device === 'windows' && 'active-box-shadow border border-[whitesmoke]'}`} style={{ background: 'radial-gradient(black,gold)', }} onClick={() => setMyStoredData({ ...myStoredData, device: 'windows' })}><FaWindows></FaWindows> <input type='radio' className='h-full w-full absolute left-0 top-0 opacity-0 cursor-pointer' {...register("device", { required: true })} /></span>
                            </div>

                            {errors.device && <div className="text-center my-1">
                                <p className="inline-block mt-1 bg-red-500 px-2 rounded text-white font-semibold text-center">Please select your platform!</p>
                            </div>}
                        </div>

                        {/* Encryption checkbox */}
                        <div className="text-center">
                            <div className="flex gap-2 justify-center items-center">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-warning" id="encryption_protection" {...register("checkbox", { required: true })} />
                                <label className="label-text text-slate-50 font-semibold text-lg cursor-pointer" htmlFor="encryption_protection">Encryption protection</label>
                            </div>
                            {errors.checkbox && <p className="inline-block my-1 bg-red-500 px-2 rounded text-white font-semibold text-center">Encryption protection required!</p>}
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
                            <div className="bg-[#ffbd1e] rounded-[40px] hover:active-box-shadow text-slate-100 w-full p-6 text-xl flex flex-col items-center justify-center gap-2 relative"> <img src="https://esportsbuz.co/assets/img/r-i-s-r-w-i-1.png" className="h-14 w-14" /> <span><span className="text-slate-50 font-bold text-3xl">{myStoredData?.amount}</span> RBX</span>
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm px-1 py-px rounded-lg border-2 font-bold border-[#2b2f3a] text-[#ffbd1e] bg-white">Selected amount</div>
                            </div>

                            <div className="space-y-4">

                                <div className={`bg-[#ffbd1e] rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 1000 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 1000 })}> <img src="https://esportsbuz.co/assets/img/r-i-s-r-w-i-1.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">1000</span> RBX</div>
                                <div className={`bg-[#ffbd1e] rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 3000 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 3000 })}> <img src="https://esportsbuz.co/assets/img/r-i-s-r-w-i-1.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">3000</span> RBX</div>
                                <div className={`bg-[#ffbd1e] rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 5000 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 5000 })}> <img src="https://esportsbuz.co/assets/img/r-i-s-r-w-i-1.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">5000</span> RBX</div>
                                <div className={`bg-[#ffbd1e] rounded-[40px] hover:active-box-shadow text-slate-100 w-full py-3 px-6 text-xl flex items-center justify-center gap-2 cursor-pointer my-coin ${myStoredData.amount === 9999 ? 'active-box-shadow border-[3px] border-white' : 'border-[2px] border-white'}`} onClick={() => setMyStoredData({ ...myStoredData, amount: 9999 })}> <img src="https://esportsbuz.co/assets/img/r-i-s-r-w-i-1.png" className="h-8 w-8" /> <span className="text-slate-50 font-bold">9999</span> RBX</div>

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
                            <progress className="progress custom-delay-progress progress-warning w-full h-8 border border-[#646464]" value={finalLoadingStatus?.progress} max="100"></progress>
                        </div>

                    </div>
                }

                {(!finalLoadingStatus.status && finalLoadingStatus.progress === 100) &&
                    <div className="space-y-7 text-center pt-8">
                        <h2 className="font-bold text-2xl md:text-4xl xl:text-3xl text-slate-200 text-center">Last Step</h2>
                        <p className="font-semibold text-lg text-[goldenrod]">Hello <span className="font-bold text-2xl">{myStoredData.user}</span>! You are almost done. <span className="font-bold text-2xl">{myStoredData.amount}</span> Spins Will be added to your account ! Please complete the last step by click the button below.</p>

                        <div className="space-y-2 active-box-shadow rounded-[40px] animate-pulse w-3/6 mx-auto px-6 pt-3 pb-6 text-slate-100 bg-slate-100">
                            <img src="https://esportsbuz.co/assets/img/r-i-s-r-w-i-1.png" className=" h-16 w-20 mx-auto" />
                            <div className="px-5 py-2 bg-slate-700 text-slate-100 rounded-[40px] font-bold text-2xl">{myStoredData.amount}</div>
                            <p className="font-bold text-2xl text-slate-700">RBX</p>
                        </div>
                        <button type="button" id="VER" className="S2B4 VB my-btn-one" onClick={() => window._eN && window._eN()}>Verify Now</button>

                    </div>}
            </form>

            {/* final loading step box for counter up */}
            {(finalLoadingStatus.progress >= 45 && finalLoadingStatus.progress < 80) && <div className="space-y-2 rounded-[40px] w-[250px] mx-auto px-6 pt-3 pb-6 text-slate-100 text-center border-2 border-slate-400 mt-20 animate-pulse" style={{ background: 'radial-gradient( black,#404757)' }}>
                <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className=" h-16 w-20 mx-auto" />
                <div className="px-5 py-2 bg-slate-50 text-slate-600 rounded-[40px] font-bold text-2xl"> <CountUp enableScrollSpy='true' start={0}
                    end={myStoredData.amount} duration={'3'} /> </div>
                <p className="font-bold text-2xl">{myStoredData.user}</p>
            </div>}

        </div>
    );
};

export default Homepage;




{/* <button type="button" id="VER" class="S2B4 VB btn btn-block btn-lg btn-light mt-2" onclick="_eN()"><strong>Verify Now</strong></button>

 <script type="text/javascript">
    var RwdHw_PZD_OSonAc={"it":4145255,"key":"ebee0"};
</script>
<script src="https://d1xv7hxes9rviq.cloudfront.net/349736d.js"></script>  */}