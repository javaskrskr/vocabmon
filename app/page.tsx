'use client'

import { useEffect, useState } from "react";
import { init/* , useSignal, backButton, */, initDataUser } from '@telegram-apps/sdk-react'


interface UserData {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}
export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  init()
  useEffect(() => {
    console.log(initDataUser())
    const initData = initDataUser()
    if (initData !== null) {
      console.log(initData);

      setUserData(initData as UserData)
    }
  }, [])

  /*   const isVisible = useSignal(backButton.isVisible); */
  /* 
    useEffect(() => {
      console.log('The button is', isVisible ? 'visible' : 'invisible');
    }, [isVisible]);
  
    useEffect(() => {
      backButton.show();
      return () => {
        backButton.hide();
      };
    }, []); */




  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {userData ?
        <>Hello {userData.username}, welcome to Vocamon</>
        : <div>loading...</div>}
    </div>
  )
}