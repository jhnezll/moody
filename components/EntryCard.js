import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    MuiThemeProvider,
    Typography
} from "@material-ui/core";
import Theme from "../styles/MuiTheme";

export default function EntryCard({title, entry}) {
    return (
        <MuiThemeProvider theme={Theme}>
            <div className="w-11/12">
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
