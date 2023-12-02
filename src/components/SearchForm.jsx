import { Modelos } from "@lib/catalogoData";
import debounce from "just-debounce-it";
import { useCallback, useEffect, useState } from "react";

function SearchForm() {
	const [search, setSearch] = useState("");
	const [error, setError] = useState(null);
	const [filteredModels, setFilteredModels] = useState(Modelos);

	useEffect(() => {
		if (search === "") {
			setError("No se puede buscar un modelo vacío");
			setFilteredModels(Modelos);
			return;
		}
		if (search.match(/^\d+$/)) {
			setError("No se puede buscar un modelo numérico");
			setFilteredModels([]);
			return;
		}

		setError(null);
		setFilteredModels(
			Modelos.filter((modelo) =>
				modelo.name.toLowerCase().includes(search.toLowerCase()),
			),
		);
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
			</form>

			<main>
				{error && <p className="text-red-500 text-sm">{error}</p>}
				<ul>
					{filteredModels.map((modelo) => (
						<li className="text-sm">{modelo.name}</li>
					))}
				</ul>
			</main>
		</>
	);
}

export default SearchForm;
