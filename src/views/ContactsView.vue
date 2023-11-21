<script>
export default {
    name: 'ContactsView'
}
</script>

<template>
    <div class="container py-5">

        <div class="row py-5">


            <h1>Contattaci</h1>
            <form action="" method="GET">
                <div class="mb-3">
                    <label for="name" class="form-label">Nome e Cognome</label>
                    <input type="text" class="form-control" name="name" id="name"
                        placeholder="Scrivi il tuo nome e cognome">
                </div>
                <div class="mb-3">
                    <label for="mail" class="form-label">Mail</label>
                    <input type="mail" class="form-control" name="mail" id="mail" placeholder="Scrivi la tua mail">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Descrizione</label>
                    <textarea class="form-control" name="description" id="description" placeholder="Ciao Lore!"
                        rows="5"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Invia</button>
            </form>


        </div>

    </div>
</template>

<style lang=scss scoped></style>