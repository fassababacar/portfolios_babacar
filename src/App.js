

function App() {
  return (
    <div id= "portfolio" className="container mb-3 mt-5">
				<div className="white-divider"></div>
				<div className="heading">
					<h1>Portfolios</h1>
				</div>
				<div className="row">
          <div className="card col-md-4">
						<h5 className = "card-header text-white bg-dark">Application présentant mon CV en Ligne</h5>
						<a href="https://fassababacar.github.io/curriculum_babacar_fassa/" target="_blank" rel="noreferrer">
							<img className="img-thumbnail" src="mesAssets/cv.png" alt="Mon CV"></img>
						</a>
					</div>
					<div className="card col-md-4">
						<h5 className = "card-header text-white bg-dark">Application Web-Gis ou Web-mapping</h5>
						<a href="https://djangoprojectspaetude.herokuapp.com/" target="_blank" rel="noreferrer">
							<img className="img-thumbnail" src="mesAssets/python_django.png" alt="Projet Web Controle données GraceTHD"></img>
						</a>
					</div>
					 <div className="card col-md-4">
						<h5 className = "card-header text-white bg-dark">Application Arbre Généalogique Familiale</h5>
						<a href="https://fassababacar.github.io/dynastie_fassa_react_app/" target="_blank" rel="noreferrer">
							<img className="img-thumbnail" src="mesAssets/arbre.png" alt="Arbre Généalogique"></img>
						</a>
					</div>
					<div className="card col-md-4">
						<h5 className = "card-header text-white bg-dark">Application CRUD & pagination</h5>
						<a href="https://django-exemples.herokuapp.com/OngleListView/" target="_blank" rel="noreferrer">
							<img className="img-thumbnail" src="mesAssets/python_django.png" alt="CRUD"></img>
						</a>
					</div>
					<div className="card col-md-4">
						<h5 className = "card-header text-white bg-dark">Application API Spatiale</h5>
						<a href="https://app-thumbtack-api.herokuapp.com/" target="_blank" rel="noreferrer">
							<img className="img-thumbnail" src="mesAssets/thumbtack.png" alt="APISP"></img>
						</a>
					</div>
				</div>
    </div>
  );
}

export default App;
