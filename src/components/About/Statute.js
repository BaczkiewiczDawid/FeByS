import React from "react";
import { Container, Chapter, Header } from "../../styles/About/Statute.style";
import Wrapper from "./Wrapper";

const Statute = () => {
  return (
    <Wrapper>
      <h1>Statut</h1>
      <h2>Stowarzyszenia Sportowo – Edukacyjnego „FeByS”</h2>
      <Container>
        <Chapter>
          <h3>Rozdział I</h3>
          <h4>Postanowienia ogólne</h4>
          <ul>
            <Header>1</Header>
            <li>
              Stowarzyszenie nosi nazwę: Stowarzyszenie Sportowo – Edukacyjne
              „FeByS”. W dalszych postanowieniach statutu zwane Stowarzyszeniem,
            </li>
            <li>
              Stowarzyszenie może używać nazw skróconych: „Stowarzyszenie FeByS”
              oraz „FeByS”.
            </li>
          </ul>
          <ol>
            <Header>2</Header>{" "}
            <li>Siedzibą Stowarzyszenia jest miasto Gliwice,</li>{" "}
            <li>
              Terenem działania Stowarzyszenia jest obszar Rzeczypospolitej
              Polskiej, ze szczególnym uwzględnieniem województwa śląskiego,
            </li>
            <li>
              Dla właściwego realizowania swoich celów Stowarzyszenie może
              prowadzić działalność także poza granicami kraju na terenie innych
              państw, z poszanowaniem tamtejszego prawa.
            </li>
          </ol>
          <Header>3</Header>
          Stowarzyszenie jest zawiązane na czas nieokreślony. Posiada osobowość
          prawną. Działa na podstawie przepisów ustawy Prawo o stowarzyszeniach
          (Dz. U. z 1989 r. nr 20, poz. 104 z późniejszymi zmianami) oraz
          niniejszego statutu.
          <Header>4</Header>
          <p>
            Stowarzyszenie może współpracować z krajowymi, zagranicznymi i
            międzynarodowymi stowarzyszeniami oraz organizacjami o podobnych
            celach statutowych. Stowarzyszenie może również współpracować z
            instytucjami, szkołami, podmiotami gospodarczymi, organizacjami i
            innymi osobami podczas realizacji celów statutowych.
          </p>
          <Header>5</Header>
          <p>
            Działalność Stowarzyszenia oparta jest przede wszystkim na pracy
            społecznej członków.
          </p>
          <Header>6</Header>
          <ol>
            <li>
              Do prowadzenia swoich spraw Stowarzyszenie może zatrudniać
              pracowników. Pracownikiem może być każdy członek Stowarzyszenia
              oraz osoby nienależące do Stowarzyszenia,
            </li>
            <li>
              Stowarzyszenie może zlecać podmiotom gospodarczym, organizacjom i
              innym osobom zadania niezbędne do realizacji celów statutowych
              Stowarzyszenia,
            </li>
            <li>
              Stowarzyszenie może zakupić przedmioty, sprzęt, nieruchomości,
              know how itp. niezbędne do realizacji celów statutowych
              Stowarzyszenia,
            </li>
            <li>
              Stowarzyszenie może wynajmować pomieszczenia i wypożyczać sprzęt
              niezbędny do realizacji celów statutowych Stowarzyszenia.
            </li>
          </ol>
          <Header>7</Header>
          <p>
            Stowarzyszenie może posiadać własne logo i rozpowszechniać je pod
            postacią nadruków na odzieży, znaczków, naklejek, plakatów itp.
          </p>
          <Header>8</Header>
          <p>
            Stowarzyszenie może używać pieczęci z nazwą, logiem, adresem, oraz
            numerami REGON, NIP, KRS itp. zgodnie z obowiązującymi przepisami.
          </p>
        </Chapter>
        <Chapter>
          <h3>Rozdział II</h3>
          <h4>Cele i sposoby działania</h4>
          <Header>9</Header>
          <p>
            Celem głównym Stowarzyszenia jest działalność sportowo – edukacyjna
            propagująca zdrowy styl życia osiągany poprzez harmonię ciała z
            umysłem, realizowany dzięki połączeniu aktywności sportowej z
            aktywnością intelektualną. Cel ten będzie popularyzowany i
            realizowany wśród członków Stowarzyszenia oraz osób wyrażających
            chęć uczestnictwa w projektach realizowanych przez Stowarzyszenie.
          </p>
          <Header>10</Header>
          <p>
            Cel główny Stowarzyszenia będzie realizowany poprzez następujące
            cele:
          </p>
          <ol>
            <li>
              Wspieranie, popularyzowanie i upowszechnianie kultury fizycznej,
              sportu, rekreacji ruchowej i turystycznej wśród dzieci, młodzieży
              i dorosłych, w szczególności poprzez promowanie takich dyscyplin
              sportowych jak: kolarstwo, koszykówka, siatkówka, piłka nożna,
              biegi, narciarstwo, snowboard oraz turystyka górska i rowerowa,
            </li>
          </ol>
        </Chapter>
      </Container>
    </Wrapper>
  );
};

export default Statute;
