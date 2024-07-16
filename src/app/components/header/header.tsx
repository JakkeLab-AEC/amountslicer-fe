'use client';

import { useState } from "react";
import AccountButton from "../account/accountButton";
import AccountPopup from "../account/accountPopup";
import ServiceLogo from "../logo/servicelogo";

export default function Header() {
    const [profileState, setProfileState] = useState(false);
    const toggleProfile = () => {
        setProfileState(!profileState)
    };

    const signOut = () => {

    }

    return (
        <header className="w-full flex key-color-main h-[48px] items-center pl-4 pr-4" style={{borderBottomWidth: 2, borderColor: "silver"}}>
            <div>
                <ServiceLogo/>
            </div>
            <div className="flex-grow">
                {/* Blank Area */}
            </div>
            <div>
                <AccountButton onClickHandler={toggleProfile}/>
            </div>
            <div style={{position: 'absolute', top: 60, right: 16}}>
                {profileState && <AccountPopup username="Test" teamname="Test" signOutHandler={signOut}/>}
            </div>
        </header>
    )
}