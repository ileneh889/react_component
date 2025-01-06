import React, { useState } from "react"
import Badge from "./components/Badge"
import Banners from "./components/Banners"
import Card from "./components/Card"
import Testimonials from "./components/Testimonials";
import Popup from "./components/Popup";
import { CiBaseball } from "react-icons/ci";
import { CiBarcode } from "react-icons/ci";

export default function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);


    return (
        <div className="main_container">
            <div>
                <button onClick={openPopup}>Open Popup</button>
                <Popup isOpen={isPopupOpen} onClose={closePopup}>
                    <h2>Hello!</h2>
                    <p>This is a pop-up message.</p>
                </Popup>
            </div>
            <Badge color={''}>hello</Badge>
            <Banners />
            <Banners type='success'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident perspiciatis et debitis?</Banners>
            <div style={{ display: "flex", gap: '10px' }}>
                <Card
                    iconColor="red"
                    title="Hello"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam possimus eveniet excepturi alias tempora reiciendis doloribus veniam minus numquam!
                </Card>
                <Card
                    icon={<CiBaseball />}
                    iconColor="green"
                    title="hola"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta harum eos illo? Ab fugit praesentium aperiam omnis, necessitatibus nisi.
                </Card>
                <Card
                    icon={<CiBarcode />}
                    iconColor="blue"
                    title="price"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam possimus eveniet excepturi alias tempora reiciendis doloribus veniam minus numquam!
                </Card>
            </div>
            <Testimonials
                quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam possimus eveniet excepturi alias tempora reiciendis doloribus veniam minus numquam!"
                name="Ilene Huang"
                position='frontend developer'
            />

        </div>
    )
}
