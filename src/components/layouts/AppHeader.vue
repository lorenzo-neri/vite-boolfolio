<script>
export default {
    name: 'AppHeader',
}


</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />



    <header style="background-image: url(../../../src/assets/img/space.jpeg);
    background-size: cover;
    background-repeat: repeat;">
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container">
                <a class="navbar-brand test fs-4" href="#">Boolfolio</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
                    aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <!-- <li class="nav-item">
                            <router-link class="nav-link" to="/" aria-current="page">Home<span
                                    class="visually-hidden">(current)</span></router-link>
                        </li> -->


                        <li class="nav-item fs-5 ps-5">
                            <router-link class="nav-link test" to="/contacts">Contacts</router-link>
                        </li>

                        <!-- <li class="nav-item">
                            <router-link class="nav-link" to="/blog">Blog</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contacts">Contacts</router-link>
                        </li> -->


                    </ul>
                    <div class="admin fs-4">
                        <a href="http://127.0.0.1:8000/admin" target="__blank">
                            Admin <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                <path fill-rule="evenodd"
                                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </nav>

    </header>
</template>

<style lang=scss>
@import '../../style.scss';

header {

    /* se metto a o qualsiasi altra cosa si bugga e non da i colori */
    .test {
        color: $bln-sw-warning;
        text-decoration: none;
        transition: .5s;


        &:hover {
            color: $bln-secondary;
        }
    }
}
</style>
