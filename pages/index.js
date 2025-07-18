import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import UploadButton from '../components/UploadButton';
import ProgressBar from '../components/ProgressBar';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Fake loading 3s
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>ResearchMateAI</title>
      </Head>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">ResearchMateAI</h1>
        <p className="mb-6 text-gray-600 text-center max-w-lg">
          Your AI-powered study assistant. Search papers, upload PDFs, and generate citations effortlessly.
        </p>
        <SearchBar />
        <UploadButton onUpload={handleUpload} />
        {loading && <ProgressBar />}
      </main>
      <Footer />
    </div>
  );
}
