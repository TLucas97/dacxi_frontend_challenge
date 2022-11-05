<template>
    <v-app>
        <div class="bg-dacxi-white h-full" data-testid="dacxi-app">
            <Header />
            <Content />
        </div>
    </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'

export default {
    name: 'App',
    components: {
        Header,
        Content,
    },
}
</script>
