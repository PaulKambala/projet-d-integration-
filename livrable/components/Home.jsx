import TendancePopulaire from "./components_Page/TendancePopulaire"
import EvenementPopulaire from "./components_Page/EvenementPopulaire"
import Organisateur from "./components_Page/Organisateur"
import ActiviteScolaire from "./components_Page/ActiviteScolaire"
import Page_acceuil from "./components_Page/Page_acceuil"
import Bloc3 from "./components_CentreAssistance/Bloc3"
export default function Home() {
  return(
    <main className="flex-1 flex-col justify-center items-center">
    <Page_acceuil />
    <TendancePopulaire />
    <EvenementPopulaire />
    <Organisateur />
      <ActiviteScolaire />
      <Bloc3/>
  </main>)
}
