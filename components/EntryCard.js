import React, {useState} from "react";
import {
    Card,
    CardActionArea,
    MuiThemeProvider,
} from "@material-ui/core";
import Theme from "../styles/MuiTheme";


export default function EntryCard({title, entry, date}) {

    return (
        <MuiThemeProvider theme={Theme}>
            <div className="w-11/12 md:w-1/2 ">

                <CardActionArea>
                    <Card className="p-2">
                            <h1 className="text-2xl">{title}</h1>
                            <h2>{entry}</h2>
                    </Card>
                </CardActionArea>
            </div>
        </MuiThemeProvider>
    );
}
