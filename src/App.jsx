import React from 'react'
import Login from "./Componentes/pages/login/login";
import Header from "./Componentes/pages/header_encabezado/header";
import NavBar from "./Componentes/pages/sidebar_barraNavegacion/navBar";
import Sidebar from "./Componentes/pages/sidebar_barraNavegacion/sidebar";
import FeedPublicaciones from "./Componentes/pages/publicaciones/feed_publicaciones";
import PostPublicacionIndividual from "./Componentes/pages/publicaciones/post_publicacionIndividual";
import FormNewPublic from "./Componentes/pages/publicaciones/form_newpublic";
import PerfilUsuario from "./Componentes/pages/login/perfilUsuario";
import MensajesPrivados from "./Componentes/pages/notifications/mensajesPrivados";
import Notificaciones from "./Componentes/pages/notifications/notificactions";
import Footer from "./Componentes/pages/footer/footer";
import Intereses from "./Componentes/pages/login/intereses";

export default function App() {
  return (
    <div>
      <Header />
      <Login />
      <NavBar />
      <Sidebar />
       <Intereses />
      <FeedPublicaciones />
      <PostPublicacionIndividual />
      <FormNewPublic />
      <PerfilUsuario />
      <MensajesPrivados />
      <Notificaciones />
      <Footer />
    </div>
  )
}