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
            <Card className="w-11/12 p-2">
                <h1>{title}</h1>
                <h2>{entry}</h2>
            </Card>
        </MuiThemeProvider>
    );
}
