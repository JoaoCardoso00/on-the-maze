import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="bg-zinc-900 min-h-screen min-w-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-9xl font-bold">O(n) The Maze</h1>
                <h2 className="font-semibold text-2xl">Beat The Complexity</h2>
                <div className="flex flex-col items-center gap-6 mt-12">
                    <Link href="/character-selection">
                        <button className="font-bold bg-neutral-900 border border-1 border-zinc-700 w-80 text-3xl rounded-md uppercase py-6 hover:border-zinc-200 transition-colors duration-200">
                            Play
                        </button>
                    </Link>
                    <Link href="stats">
                        <button className="font-bold bg-neutral-900 border border-1 border-zinc-700 uppercase w-80 text-3xl rounded-md py-6 hover:border-zinc-200 transition-colors duration-200">
                            Stats
                        </button>
                    </Link>
                    <Link href="/options">
                        <button className="font-bold bg-neutral-900 border border-1 border-zinc-700 uppercase w-80 text-3xl rounded-md py-6 hover:border-zinc-200 transition-colors duration-200">
                            Options
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
