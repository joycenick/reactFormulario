    import { useState } from "react";
    import "../styles/MyForm.css";

    const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : "");
    const [tipo, setTipo] = useState(user ? user.tipo : "");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [pokemons, setPokemons] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação de campos obrigatórios
        if (!name || !tipo || !bio || role === "") {
        alert("Preencha todos os campos!");
        return;
        }

        const novoPokemon = { name, tipo, bio, role: Number(role) };
        setPokemons([...pokemons, novoPokemon]);

        // Mensagem de sucesso
        setSuccessMessage("Pokémon cadastrado com sucesso!");

        // Limpa os campos
        setName("");
        setTipo("");
        setBio("");
        setRole("");

        // Remove mensagem após 3 segundos
        setTimeout(() => setSuccessMessage(""), 3000);
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nome do Pokémon</label>
            <input
                type="text"
                name="name"
                placeholder="Digite o nome do Pokémon"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            </div>

            <label>
            Tipo
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="">Selecione o tipo</option>
                <option value="fogo">🔥 Fogo</option>
                <option value="agua">💧 Água</option>
                <option value="planta">🌱 Planta</option>
                <option value="elétrico">⚡ Elétrico</option>
                <option value="normal">🧠 Normal</option>
                <option value="lutador">🥊 Lutador</option>
            </select>
            </label>

            <label>
            Descrição:
            <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Descrição do Pokémon"
            />
            </label>

            <label>
            Poder
            <input
                type="number"
                name="role"
                min={0}
                max={100}
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />
            </label>

            <input type="submit" value="Cadastrar" />

            {/* Mensagem de sucesso */}
            {successMessage && (
            <p className="success-message">{successMessage}</p>
            )}
        </form>

        {/* Lista de Pokémons cadastrados */}
        {pokemons.length > 0 && (
            <div className="pokemon-list">
            <h3>Pokémons cadastrados:</h3>
            <ul>
                {pokemons.map((p, index) => (
                <li key={index}>
                    <strong>{p.name}</strong> ({p.tipo}) - Poder: {p.role}  
                    <br />
                    {p.bio}
                </li>
                ))}
            </ul>
            </div>
        )}
        </div>
    );
    };

    export default MyForm;
