import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import featuresData from "./data/features.json"; // importamos el archivo de data
import Modal from "./components/Modal";
import "./index.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [likes, setLikes] = useState(0);
    const [features, setFeatures] = useState([]); // nuevo estado para almacenar la lista

    const [selectedFeature, setSelectedFeature] = useState(null);

    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
    }, [darkMode]);

    // Otro useEffect para la carga de datos
    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    // 3. Función para abrir el modal con los datos del item
    const handleOpenModal = (item) => {
        setSelectedFeature(item);
    };

    // 4. Función para cerrar (volver el estado a null)
    const handleCloseModal = () => {
        setSelectedFeature(null);
    };

    return (
        <div className="app">
            {/*} d. props pasa estado y function al hijo */}
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />

            <section>
                <Hero />
            </section>

            <section className="cards">
                {/*} con se renderiza */}
                {features.map((item) => (
                    <FeatureCard
                        key={item.id}         // Prop para listas
                        title={item.title}    // Cumple d: Props dinámicas
                        description={item.description}
                        onClick={() => handleOpenModal(item)} // 2. Pasa función para abrir modal
                    />
                ))}
            </section>

            {selectedFeature && (
                <Modal data={selectedFeature} onClose={handleCloseModal} />
            )}

            <section>
                <Stats likes={likes} setLikes={setLikes} />
            </section>

            <Footer />
        </div>
    );
}

export default App;
