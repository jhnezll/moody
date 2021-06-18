import PageLayout from "../components/PageLayout";
import {useContext} from "react";
import SessionContext from "../util/SessionContext";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {Book, AddBox, Timeline} from '@material-ui/icons';

export default function Private() {
    const {userProfile} = useContext(SessionContext)

    return (
        <PageLayout privateRoute title="Dashboard">
            <div className="h-screen flex flex-col justify-center items-center bg-gray-50">
                {/*Body*/}
                <div className="mb-auto h-10 bg-green-500">
                    Content
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


        </PageLayout>
    )
}
