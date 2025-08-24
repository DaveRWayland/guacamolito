import "@/styles/globals.css";
import "@/styles/components.css";
import "primereact/resources/themes/lara-dark-amber/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Layout from "../components/Layout/Layout.js";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
