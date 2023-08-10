<template>
	<main class="main-layout">
		<AppHeader />
		<RouterView />
		<AppFooter />

	</main>
</template>

<script>
import { RouterView } from 'vue-router'
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'



export default {
	created() {
	},
	components: {
		AppHeader,
		AppFooter
	},
	computed: {
	},
}
</script>