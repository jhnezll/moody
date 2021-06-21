import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {Book, AddBox, Timeline} from '@material-ui/icons';
import React, {useContext, useEffect, useState} from "react";
import fb from "../util/firebase-config";
import SessionContext from "../util/SessionContext";
import EntryCard from "../components/EntryCard";

function useJournal() {
    const {userProfile} = useContext(SessionContext)
    const [journal, setJournal] = useState([])

    useEffect(() => {
        fb.firestore().collection(userProfile.uid).onSnapshot((snapshot => {
            const newJournal = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setJournal(newJournal)
        }))
    }, [])
    console.log(journal)
    return journal
}

export default function Dashboard() {
    const {userProfile} = useContext(SessionContext)
    const journal = useJournal()

    return (
            <div className="h-screen flex flex-col justify-center bg-gray-50">
                {/*Body*/}
                <div className="flex flex-col space-y-4 items-center mb-auto my-4">
                    {journal.map(journal =>
                        <EntryCard
                            title={journal.title}
                            entry={journal.entry}
                        />
                    )}
                </div>

                {/*Footer*/}
                <div className="w-screen h-25 bg-blue-500">
                    <BottomNavigation showLabels>
                        <BottomNavigationAction label="Journal" icon={<Book/>}/>
                        <BottomNavigationAction label="Add" icon={<AddBox/>}/>
                        <BottomNavigationAction label="Timeline" icon={<Timeline/>}/>
                    </BottomNavigation>
                </div>
            </div>
    )
}
