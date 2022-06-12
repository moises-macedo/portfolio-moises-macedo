import "../../Assets/Styles/Css/aboutMe.css";
import Foto1 from "../../Assets/Img/foto1.jpg";
import Pais from "../../Assets/Img/pais.jpg";
import Foto2 from "../../Assets/Img/foto2.jpg";
import Familia from "../../Assets/Img/familia.jpeg";

const AboutMe = () => {
    return (
        <div className="container--about">
            <header className="about-title">
                <h2>Um pouquinho sobre mim.</h2>
            </header>
            <nav className="about--circle-btn">
                <ul className="">
                    <li>
                        <button>&nbsp;</button>
                    </li>
                    <li>
                        <button>&nbsp;</button>
                    </li>
                    <li>
                        <button>&nbsp;</button>
                    </li>
                    <li>
                        <button>&nbsp;</button>
                    </li>
                </ul>
            </nav>
            <section>
                <div>
                    <p>
                        Meu nome é Moisés Alex tenho 26 anos sou natural de Goiânia. Nascido e criado na terra do sertanejo desde pequeno ouvindo modas de viola nas festas de família, mas acredito que não deu muito certo, pois gosto mesmo é de um bom (Rock and Roll) deixo a moda de viola e o sertanejo para garotada. Quando jovem queria viajar o mundo, conhece lugares lindos que só observamos na Tv. Como a capital do pequi é muito quente sempre sonhei em conhecer o frio de fato, conhecer neve, fazer bonecos de neve, anjos de neve.
                        OBS: Sou o de camisa cinza.
                    </p>
                    <figure>
                        <img src={Foto1} alt="Moisés Alex" />
                        <figcaption>Mascarados de Pirenópolis</figcaption>

                    </figure>
                </div>
                <div>
                    <p>
                        Em 2015 perdi minha base, minhas pernas, minha vida.
                        Meu pai foi um homem incrível, que sempre me ajudou a questionar as regras de tudo, sempre me fez pensar nos ônus e bônus das ações. Fui criado com diálogo, sempre que fazia algo errado nos conversávamos sobre o ocorrido, se um dia for metade do homem que ele foi seria um bom exemplo para minha família.
                        Minha mãe, um doce mulher, acho que nunca vi ela dizer não a ninguém, sempre tentando ajudar a todos. Lembro que uma vez perguntei-lhe o que ela gostaria de ter quando era criança, ela me disse que era ter uma geladeira para poder ver gelo. Não consigo imaginar como foi difícil sua infância.
                        Sou o filho mais novo, fui adotado com 3 meses de vida, e sim fui muito bajulado.
                    </p>
                    <figure>
                        <img src={Pais} alt="Meu pai e minha mae" />
                        <figcaption>Papai e Mamãe.</figcaption>
                    </figure>
                </div>
                <div>
                    <p>Em 2016 conseguir fazer primeira viagem fora do país, era um sonho sendo realizado. Passei por Foz do Iguaçu(PR), Córdoba(AR) e Santiago(CL).
                        Conseguir ver neve pela primeira vez e pensei comigo mesmo ("Mãe, é muito gelado"). Foi uma experiência incrível, o contato com outras culturas além da nossa ajuda a ver tudo diferente e quando voltei para o Brasil coloquei na cabeça que vou seguir meus sonhos.</p>
                    <figure>
                        <img src={Foto2} alt="Puente del Inca na Argentina." />
                        <figcaption>Puente del Inca na Argentina.</figcaption>
                    </figure>
                </div>
                <div>
                    <p>Em 2017 larguei tudo em Goiânia e vim sozinho para Curitiba a cidade que na sombra congela e no sol torramos e foi quando fiz meu primeiro curso livre de TI (Introdução a programação), porém como tinha que trabalhar em dois empregos desviei dos estudos e foquei no trabalho. Minha rainha, minha esposa, meu amor sempre acreditou em mim, isso me fez a sonhar novamente. Em 2021 comecei a estruturar os planos de estudo novamente e hoje sou aluno da Kenzie Academy Brasil no curso de Front End e graduando pela Universidade Estácio de Sá em análise e desenvolvimento de sistema.
                    </p>
                    <figure>
                        <img src={Familia} alt="Minha Família" />
                        <figcaption>Eu, a Patroa e as Crianças</figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )


}
export default AboutMe