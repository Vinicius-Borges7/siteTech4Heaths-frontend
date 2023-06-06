import Links from './links';

const style = {
    marginTop : "1rem",
    marginBottom: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem"
}

export default function Main(){
    return(
        <section >
            <div className="mt-3">
                <a name="linktrees"></a>
                <h2>Link Trees</h2>
                <div id="alunosCarousel" data-ride="carousel">
                    <Links/>
                </div>
            </div>
        </section>   
    )
}