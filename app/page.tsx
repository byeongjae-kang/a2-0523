import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column", gap: 300 }}>
        <Link href="/cats">Cats</Link>
        <h1>Home page</h1>
        <Image
          src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Cat image for testing next js "
          width={300}
          height={500}
        />
        <Image
          src="https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Cat image for testing next js "
          width={300}
          height={500}
        />
        <Image
          src="https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Cat image for testing next js "
          width={300}
          height={500}
        />
        <Image
          src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHN8ZW58MHx8MHx8fDA%3D"
          alt="Cat image for testing next js "
          width={300}
          height={500}
        />
      </div>
    </main>
  );
}
