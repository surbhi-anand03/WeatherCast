import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

import "./InfoBox.css"

export default function InfoBox({info}){

    const INIT_URL = 
        "https://media.istockphoto.com/id/2184759485/photo/aerial-view-of-mountains-in-the-morning-in-mae-hong-son-thailand.jpg?s=612x612&w=is&k=20&c=7VhY2wQOyQrozyofHcTlHVugNTPX2qqSPA_FvAxmj5k="

    const HOT_URL= "https://media.istockphoto.com/id/1343620764/photo/maple-branch-with-autumnal-leaves-on-the-sunny-background-in-the-forest.jpg?s=1024x1024&w=is&k=20&c=DFpj3x1eIuk4VunS0iLix5BHx_ecZUDQ9ApjQgft800=";
    const COLD_URL = "https://images.unsplash.com/photo-1773842297859-b3c18e22182a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return(
        <div className="InfoBox">
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image = {
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    {
                        info.humidity > 80 
                        ? <ThunderstormIcon /> 
                        : info.temp > 15
                        ? <SunnyIcon />
                        : <AcUnitIcon />
                    }
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ color: 'text.secondary' }}>
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Min Temp: {info.tempMin}&deg;C</p>
                        <p>Max Temp: {info.tempMax}&deg;C</p>
                        <p>Weather can be described as <b>{info.weather}</b> and feels like: {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}