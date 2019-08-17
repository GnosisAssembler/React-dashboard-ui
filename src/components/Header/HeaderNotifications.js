import React from 'react';
import styled from 'styled-components';
import {MdNotificationsNone} from "react-icons/md";

export default function HeaderNotifications() {

    const HeaderNotificationsWrapper = styled.span`
        font-size: 23px;
        &:hover {
            color: #11cdef;
            cursor: pointer;
        }
    `

    return (
        <div className="header__notifications">
            <HeaderNotificationsWrapper>
                <MdNotificationsNone />
            </HeaderNotificationsWrapper>
        </div>
    )
}
