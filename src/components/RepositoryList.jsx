const repositoryName = 'unform2'
export function RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="http://">
                        Acessar repositório no GitHub
                    </a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="http://">
                        Acessar repositório no GitHub
                    </a>
                </li>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="http://">
                        Acessar repositório no GitHub
                    </a>
                </li>
            </ul>
        </section>
    );
}