import ProductCard from './ProductCard';

const CommunityFavorites = () => {
  const favoriteProducts = [
    {
      id: 1,
      title: 'A Timeless Masterpiece',
      rating: 4.5,
      review:
        '"The craftsmanship on this watch is simply impeccable. Feels great, looks even better."',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWgBLl_A63vu58fOMzuOn7mobnP9r7L28bPc1rjyw9ue9PrdF5eZYGDaC3wCq7Mr6vKZRFfATiq7R0KGxsQcAbnVDhda9sXUkCHjiq5toX7JTN026S0cIVUf5yHEqFZOkCT1RDST7TCoMVP3mXBhHj27l6Bs2Ng6CdcbRGg_ZFxq7NCC14udtJHcFnwNil2Nd9DnZchsohtBc5Ie0x4KOzUVoVfzSGxoWZhTZ2mN6k7wOV0wlQzDE7dmTvjtwQrQJW0WvrhCi_kbo',
      userName: 'JaneDoe',
      userAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA47fqo8J6p62tR5ofxnuMKG8m0mnEC3XSCBluMmV_IOcfDacw6Z1A_cRu1HXVZ1idm1lkg925h90-1Mz9HdqTAkO_8r1FGfPnn7jsUpzDFckovplX7ikcC2Ms2Ktj0OG-432XXrCmLVXyE15aY4SaGSFCO3jmNPe-OKhMAEyhHrvdnjufwATwx0XVHJ9ZQYdFulOoqhYlWrXG2FGw2zGsliREmmf-x5v8jMX9jNHuulKX39xisM9N79MN2OM6_7NDdhMu60Pvs_qM',
      likes: 210,
      isFavorite: true,
    },
    {
      id: 2,
      title: 'Incredibly Comfortable!',
      rating: 5.0,
      review:
        '"Best running shoes I\'ve ever owned. The cushioning is perfect for long distances."',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAz9aMYN7mrtQeV7vncmTvqGlXilUAdb_aHulk0IIEtms234nGRa0I5jcB2IHQSMOddQUQOCKzaLyxlpuXPd4-08ISPNlgMSUodnxf4CdL0SOJcUQ4OYfjDKAb9uHy3-cYGfy6Vr1j-svx-XnB4o9OtiOLYAz8HjoJURz6o2vyVsLs581qX-uaAHXGf33juyl20Wyqy1lan9WjgoJaYBi4xWpkmXccgc2xWtfC5vQks5soGtDfw8WY-a4SGB_sb1plZBaBRRkR-oNw',
      userName: 'JohnSmith',
      userAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDWIFI88myiu3qHAbuu_Fr5NI0XWfkRb6KSvx3d9a1WZFKIqSMC-l3dacPb1NpgKFMIG-j_k5-UMjBW8du97mLB3iV8ekiInBjDHNu9PBWyJxxCs1VA1VF_fZr19eQwINrYnNXn2y9XT7H_UuCr9oXy4VHS0joYpjn027yQ9msqY7DWCDo7YREw0Yt_FPhQIiLAydzbBURa5okD0f8R2EV-L9HXet7jMJ73eR9SVOrhNC1hbmhXYlI8x9G1ujR5P5kRQ22MphHVGUA',
      likes: 185,
      isFavorite: true,
    },
    {
      id: 3,
      title: 'Next-Gen is Here',
      rating: 5.0,
      review:
        '"Blazing fast load times and stunning visuals. Worth every penny."',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCdN4uuBxY6ctFCbU1HJNaKNOVzCKoM-jPvnsEt57Zg73AXDgASiJpatXPy47PHK60t2_xdgTxuyngC6U82eQnEE_asFQeV2-Hlh7TF2mFXuETkeuhakQtE83COmeQ2UvZX3d7X66DzbcknhnTcxgLkqxCKmMXtuuaRchJlH9vhx3W8rwe90kW5TqDYs4efsZrPdsS1kPMgYCpEdXqrN8ZWhjAFzpiSYZXnRKxfVFP0LUnrKmwYzvqWevmkiYcVr_n-YaIlkgmyi6k',
      userName: 'GamerX',
      userAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBwRyqmGTVESZrwuGWGOMaqPuSQdvc4gMrHm4Fz6SnupVwSODxOlCCad9OvYH8B89qTlG8nbqnPKuJZtr5ZDU32LTg5PsRVtq5YlPp2Zx297GqwACfXWxUX3E9yZ0nd6yHOVYpzPXs-8PfAHjt38bSIOo8Y4WZFvGVk5QsKiLZkGEQ8b9qq1gVd8Rlk1n4yYAjWmJchSxPpH1AIyeAJqu1lA4f4g6P8R19qtKejsH8YsMYH4KwB7MCeljQ8ewphXiSg3CSPOAvpf0g',
      likes: 150,
      isFavorite: true,
    },
    {
      id: 4,
      title: 'Gripping Storyline!',
      rating: 4.5,
      review:
        '"Couldn\'t put it down. A must-read for anyone who loves a good thriller."',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBbOfRUYR6wwFH8Rt2ghDDTIzH5iSOUhIdsH-vY_R6KoSwzMO9JQTnMdb1jPK7ruxd5Y2strcjUzWKqZo9gs-ETW0jqsr2-Ii3Cx2i-Hic4kDPvRk3-ts5Y_TdE_BnPZ1b9GyLGhJ_mJ77ULe2kkzADzSvA1BAFK5i13ZyJrX7UZts6q53_UBKVI3iTFK2ZbEoTygHqO3hy_xXM4uTI7cdF-zfE_rA5zqBOd0sRqDJ-bBbn0BG1sHR78j7vPzHTMWJLgtn-ozaplsw',
      userName: 'BookwormBabe',
      userAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAcwSEXAsJctDxvLXA-aQhYT5TNDda0pPnQ6nEShkEp_HcaHYLByvAQEklM6ety32qXl4zZmw0nwItWRfxmpKuPoTiuQeKfnAgsC3HDblWNQ4gZkUdr539ulGdzSWbNOgfBzap-k36QrQ7Ih7Z5wi9my98vZMW-zd18bTBH3AnyvxIOpRtYCCVTVyxBqRe_Ab_TwUcA3PjdP9vBSYJ2AATDbTj-_LCGT3o2j16gPDADsJhzyegGSzX9fRUbfsLpiEq_M4u_pT_FWYs',
      likes: 130,
      isFavorite: true,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-6">
        Community Favorites
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default CommunityFavorites;
