import FilterSidebar from '@/src/components/product/FilterSidebar';
import Pagination from '@/src/components/product/Pagination';
import ReviewCard from '@/src/components/product/ReviewCard';

export default function CategoriesPage() {
  const reviews = [
    {
      id: 1,
      category: 'Electronics',
      categoryColor: 'text-primary',
      title: 'Incredible Sound, Unbeatable Comfort',
      rating: 5,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYOPBSAeSfDQ3cA4dVVaN8QRWFLtkoFUWAWX36VKEYd4CAVN2j84FY9QXjy98mqnwRDjG0_F3ja0CSWhgh2TIpQy1zhXiOEtDQYYG-LBLB7w7xi3ZEMzj9JLNUVNkQa87mD-_3WLdSJ_72lcURa4xLMIoQQPE0c3nD2c1z2yFCm5ybLfYIB4h9EOhC9JNXy0jzIt9RefYvsh9oIMl36PL3iPRClVLrQ_X4VGF2c0mIaQ6RzdIRNazl5Kg--AP0uhIQJFkxuX6Qpw',
      author: 'soundguy',
      date: 'Nov 02, 2023',
      likes: 215,
      comments: 42,
    },
    {
      id: 2,
      category: 'Skincare',
      categoryColor: 'text-pink-500',
      title: 'A Miracle Serum for Dry Skin',
      rating: 4,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdUvA8oG2KtG0MDfS5CzWAeEnAABGrSO96sVdhjgoK43oZlx1ubTQYCigeVxPvgu2EJDthF7hYqkxL98CJPiwV7DCyPjLbd6WPkxzAmi4poP09h708K86kVrGMZUWV0KbUZV45vzif3oh7wMR8lKGF6-jGDXvJrnP3CkCRe-4f8XM3ux-K2D9E1dDQzCZaAkqV58zShBMgcJSMuBtWpCYKnQgqvr_FzUnJpZJZdaXnFK2X3Idy6DW1NbEotPYYvramecEbu6o14Q',
      author: 'glowgetter',
      date: 'Oct 28, 2023',
      likes: 158,
      comments: 29,
    },
    {
      id: 3,
      category: 'Electronics',
      categoryColor: 'text-primary',
      title: 'The Smartwatch That Does It All',
      rating: 4,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3-S3_0rWgNKiMGsJ0Xjx4nfGIe6k5xHv95w-4tC2TBsuKYGbgb0u0bAWPZysdcnYbTsnHM7zdeufYK1nqhBQ16TpX2_SvO5awhoLhPzDyeRmq2mKOSzwiHAHAFpnIgy5x8OE9Sa361ZRs7r-isvjgalqlHS8g4HNxNEtO_k0omzl6pXZdZFhbXwMnT4tlv3ngjQUKAHqMT1fLb1BdsebqcquY_gLss-GIfixU2qMmxVto6YbXb8RoNbOuOhGqdrXe1UiGIah_Aw',
      author: 'techsavvy',
      date: 'Oct 25, 2023',
      likes: 121,
      comments: 18,
    },
    {
      id: 4,
      category: 'Apparel',
      categoryColor: 'text-orange-500',
      title: "Best Running Shoes I've Ever Owned",
      rating: 5,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDGMBDKpj3yEc9yR1e6BYtUZPAP5xjOSgNDq1MJDCVi0sFcDHwxtjwmnBRjxs-U5m5F1vuJp7SEDJusu_3oIzZr9w1svQdwvn4gF6Kdvvy2BE7gBg7FBKuow2-28zxJOOSpUEwjTxCirq5QoKQTfqL1GxK6dHLpy4h_QDH50a9u3Ke_A_HHhopXIig4yKBzUeWheKPM3DvYv8XiOUpGWWC0Cn7UviFCvyBruQM9TvvXlcx2CTul8MnJPiMfKTgsKBJ8PEeeveFswg',
      author: 'runner23',
      date: 'Oct 22, 2023',
      likes: 98,
      comments: 15,
    },
    {
      id: 5,
      category: 'Books',
      categoryColor: 'text-amber-600',
      title: 'A Must-Read Fantasy Epic',
      rating: 5,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCESjmwCkdt6-JSh3QITnT-vJdpmUh4iB0HcfwfLPnhEzryjqZA6X5WNAcHl4uHbc5hGXMLklyghV-iBW4D0ihV32RRkcw4h-pNi7cRugRRggG4IlsiJmoAh2soEuR-_6JqpZrt6WFVVRZ4gqcFlYZMgzII6MA1kHs4fQht_VeZeCivxmgFbMQikwGfrpPtCxzOgjVHZFkl-045WgmDJpbuRnNzK8rJPHtiqqa0e9GgbCGeXGXFCVWUbIHR9GxEA1d_uOD6QW762w',
      author: 'bookworm',
      date: 'Oct 20, 2023',
      likes: 85,
      comments: 22,
    },
    {
      id: 6,
      category: 'Home Goods',
      categoryColor: 'text-teal-600',
      title: 'Sleek design, but difficult to clean',
      rating: 3,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCn3BYDBbuR0AINq1UClN8m4S14tfjcVimsl_k-FTIQQDMirX5TrM4qjAQYAlSzcYJDaTx0Xp8sYcE2c61Qu2cvaGnSFas6gdSHBYUApr2BkX2XRfi2zDTDs8h4K-84BMppieUuwU8Zy2WeDYUE0dfs_eNqrtAdW3vHZu73dSP288Ym8qWhTb0ZW-I9DdCjf0sv0M-7M1DCK0IAuSOquKKtIiH0iMUc2cSS72nP6_Zijzt1uSRsioQMkVQTWD0QJkzMyS3TBzPgoQ',
      author: 'homebody',
      date: 'Oct 19, 2023',
      likes: 56,
      comments: 11,
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar />

          <div className="flex-1">
            {/* Page Heading and Search */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <p className="text-neutral-800 dark:text-neutral-100 text-4xl font-black tracking-[-0.033em] min-w-72">
                All Product Reviews
              </p>
              <div className="w-full md:max-w-xs">
                <label className="flex flex-col h-12 w-full">
                  <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                    <div className="text-neutral-300 dark:text-neutral-500 flex bg-neutral-100 dark:bg-neutral-900 items-center justify-center pl-4 rounded-l-lg border-y border-l border-neutral-200/80 dark:border-neutral-800/80">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-neutral-800 dark:text-neutral-100 focus:outline-0  border-y border-r border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100 dark:bg-neutral-900 h-full placeholder:text-neutral-300 dark:placeholder:text-neutral-500 pl-2 text-base font-normal leading-normal"
                      placeholder="Search reviews..."
                      defaultValue=""
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center gap-2 px-4 py-3 mb-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80">
              <div className="flex gap-2 items-center">
                <p className="text-sm text-neutral-300 dark:text-neutral-500">
                  Sort by:
                </p>
                <select className="form-select bg-transparent border-0 rounded-lg p-2 text-sm font-medium text-neutral-800 dark:text-neutral-100 focus:ring-2 focus:ring-primary/50">
                  <option>Most Popular</option>
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg text-neutral-800 dark:text-neutral-100 bg-primary/20 dark:bg-primary/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded-lg text-neutral-300 dark:text-neutral-500 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}
