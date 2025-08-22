/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'receitadaboa.com.br',
      'isomorphic-furyroad.s3.amazonaws.com'
      // adicione outros domínios externos usados nas imagens
    ],
  },
};

module.exports = nextConfig;