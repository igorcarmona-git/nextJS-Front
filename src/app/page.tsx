import SearchInput from "./components/searchInput";
import api from "./utils/api";
import Image from "next/image";

export default async function Home({ searchParams }: { searchParams: { name?: string } }) {
  // Extraindo o parâmetro de busca, caso exista
  const search = searchParams?.name ?? '';

  // Fazendo a chamada para a API com o nome, se fornecido
  const { data } = search.length > 3 ? await api.get(`/character/?name=${search}`) : await api.get('/character');
    
  return (
    <div>
      <SearchInput defaultValue={search} />

      <div className="flex flex-row items-center justify-center gap-3 flex-wrap w-full">
        {data?.results && data.results.map((item: any) => (
          <div key={item.id} className="bg-white text-black p-3 mt-6">
            <Image src={item.image} width={300} height={300} alt={item.name} />
            <p>
              <strong>Nome:</strong><span> {item.name}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
