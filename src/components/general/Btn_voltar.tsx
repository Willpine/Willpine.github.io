import Link from "next/link";

export default function Btn_voltar() {
  return (
    <div className='mt-6 mb-6'>
      <Link href={`/`}>
        <h3>Voltar</h3>
      </Link>
    </div>
  );
}
