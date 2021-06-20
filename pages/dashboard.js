import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {Book, AddBox, Timeline} from '@material-ui/icons';
import React from "react";

export default function Dashboard() {
    return (

            <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
                {/*Body*/}
                <div className="mb-auto h-10 bg-green-500">

                </div>

                {/*Footer*/}
                <div className="w-screen h-25 bg-blue-500">
                    <BottomNavigation showLabels>
                        <BottomNavigationAction label="Journal" icon={<Book/>} />
                        <BottomNavigationAction label="Add" icon={<AddBox/>} />
                        <BottomNavigationAction label="Timeline" icon={<Timeline/>} />
                    </BottomNavigation>
                </div>
            </div>



    )
}
