import { useState } from 'react';

const useStoreData = () => {
    const [myStoredData, setMyStoredData] = useState({user: null, device: 'apple', amount: 1000})
    // console.log(myStoredData);
    return {myStoredData, setMyStoredData}
};

export default useStoreData;