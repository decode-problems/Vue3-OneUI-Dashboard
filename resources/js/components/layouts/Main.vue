<template>
    <div id="page-container" class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <Header></Header>

        <!-- Main Container -->
        <main id="main-container">
            <slot></slot>
        </main>
        <!-- END Main Container -->

        <Footer></Footer>
    </div>
</template>

<script>
import Sidebar from "./inc/Sidebar";
import Navbar from "./inc/Navbar";
import Header from "./inc/Header";
import Footer from "./inc/Footer";

export default {
    components: {Sidebar, Navbar, Header, Footer}
}
</script>
