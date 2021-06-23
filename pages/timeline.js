import React, {useContext, useEffect, useState} from "react";
import SessionContext from "../util/SessionContext";
import fb from "../util/firebase-config";
import {format} from "date-fns";
import PageLayout from "../components/PageLayout";
import {CartesianGrid, Legend, Line, XAxis, YAxis} from "recharts";
import {Tooltip} from "@material-ui/core";
import {LineChart} from "recharts";

export default function Timeline() {
    const {isAuthenticated, userProfile} = useContext(SessionContext)

    const [data, setData] = useState()

    useEffect(() => {
        fb.firestore().collection(userProfile.uid).get()
            .then(r => {
                const data = r.docs.map(doc => ({date: format(doc.data().date.toDate(), 'L-d-y'), score: doc.data().score}))
                console.log(data)
                setData(data)
            })
    }, [])

    return(
        <PageLayout title="Timeline">
            <div className="h-screen w-full flex justify-center items-center px-12 bg-gray-50">
                <LineChart width={730} height={250} data={data}
                           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="#8884d8" />
                </LineChart>
            </div>
        </PageLayout>
    )
}