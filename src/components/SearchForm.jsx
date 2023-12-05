import { Modelos } from "@lib/catalogoData";
import { React, useCallback, useEffect, useState } from "react";
import "/src/index.css";

function SearchForm() {
	const [search, setSearch] = useState("");
	const [error, setError] = useState(null);
	const [filteredModels, setFilteredModels] = useState(Modelos);

	const observerOptions = {
		root: null,
		rootMargin: "80px",
		threshold: 0,
	};

	// TODO: Fix IntersectionObserver
	useEffect(() => {
		if (search.match(/^\d+$/)) {
			setError("No se puede buscar un modelo numérico");
			setFilteredModels([]);
			return;
		}

		setFilteredModels(
			Modelos.filter((modelo) =>
				modelo.name.toLowerCase().includes(search.toLowerCase()),
			),
		);
		setError(null);

		const modeloElements = document.querySelectorAll(".modelo");

		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				const { isIntersecting } = entry;
				if (isIntersecting) {
					entry.target.classList.add("fade-in");
				} else {
					entry.target.classList.remove("fade-in");
				}
			}
		}, observerOptions);

		for (const modeloElement of modeloElements) {
			observer.observe(modeloElement);
		}

		return () => {
			for (const modeloElement of modeloElements) {
				observer.unobserve(modeloElement);
			}
		};
	}, [search]);

	const handleChange = (e) => {
		const newSearch = e.target.value;
		setSearch(newSearch);
	};

	return (
		<>
			<form
				onSubmit={(e) => e.preventDefault()}
				id="form"
				className="relative mb-14"
			>
				<input
					onChange={handleChange}
					name="search"
					placeholder="Buscar modelo..."
					className="border-2 border-gray-300 text-sm px-6 py-3 w-full rounded-full pr-10"
				/>
				{error && (
					<p className="text-red-500 text-sm text-center mt-4">{error}</p>
				)}
			</form>
			<article>
				<ul className="modelosContainer">
					{filteredModels.map((modelo) => (
						<div
							key={modelo.id}
							className="modelo w-fit border-orange text-dark-gray backdrop-blur-3xl bg-slate-100 bg-opacity-60 max-w-[300px] min-h-[100px] p-5 rounded-xl shadow-md shadow-gray-200"
						>
							<div className="flex flex-col gap-3">
								<h3 className="font-bold text-sm text-center pb-2 uppercase text-dark-gray">
									{modelo.name}
								</h3>
								<img
									className="w-full max-w-[300px] mx-auto"
									src={modelo.src[0]}
									alt={`Modelo ${modelo.name}`}
								/>
								<p className="text-center text-sm">{modelo.description}</p>
							</div>
							<div className="flex justify-between items-center mt-4">
								<span className="text-sm font-bold">
									${" "}
									{modelo.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
									USD
								</span>
								<a
									className="text-white bg-orange hover:bg-inherit hover:border-[2px] hover:border-orange hover:text-orange hover:font-bold transition-all rounded-full text-sm px-6 py-2 border-2 border-orange"
									href={`/catalogo/${modelo.path}`}
								>
									Ver más
								</a>
							</div>
						</div>
					))}
				</ul>
			</article>
		</>
	);
}

export default SearchForm;
