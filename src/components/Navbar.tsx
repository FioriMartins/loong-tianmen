import React from 'react';
import loongicon from '../../public/loong.svg'

const Navbar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    alert(`Pesquisando por: ${searchInput.value}`);
    searchInput.value = '';
    setIsSearchOpen(false);
  };

  // Função para rolagem suave
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Se for o botão HOME, rola para o topo
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
      return;
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Ajuste para compensar o header
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="py-4 px-6 w-full relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
            <svg width="28" height="30" viewBox="0 0 1178 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_708_2)">
                    <path d="M1178 773.604C1178 942.55 1039.3 1080 868.818 1080C836.937 1080 805.876 1075.3 776.063 1066C778.482 1064.51 780.868 1062.97 783.243 1061.44C783.757 1061.1 784.283 1060.76 784.808 1060.41C787.128 1058.88 789.438 1057.32 791.725 1055.74C792.25 1055.37 792.732 1055 793.367 1054.64C794.603 1053.94 795.785 1053.16 796.847 1052.22C797.92 1051.29 799.069 1050.49 800.163 1049.69C802.374 1048.05 804.563 1046.39 806.741 1044.71C807.146 1044.39 807.551 1044.07 807.956 1043.75C809.893 1042.22 811.819 1040.68 813.723 1039.12C814.096 1038.82 814.489 1038.5 814.862 1038.19C816.974 1036.44 819.064 1034.68 821.144 1032.87C821.603 1032.47 822.074 1032.06 822.534 1031.65C824.471 1029.96 826.386 1028.24 828.291 1026.51C828.487 1026.32 828.696 1026.14 828.893 1025.96C830.928 1024.08 832.931 1022.18 834.923 1020.26C835.394 1019.81 835.864 1019.35 836.324 1018.89C838.316 1016.95 840.275 1015 842.212 1013.02C842.365 1012.85 842.518 1012.68 842.671 1012.54C843.722 1011.51 844.773 1010.5 845.736 1009.39C846.852 1008.09 848.155 1006.77 849.359 1005.46C851.219 1003.43 853.047 1001.39 854.853 999.328C855.17 998.97 855.477 998.612 855.783 998.255C857.392 996.4 858.99 994.524 860.566 992.636C860.916 992.203 861.277 991.78 861.627 991.357C863.379 989.231 865.097 987.094 866.793 984.936C867.154 984.47 867.516 983.992 867.877 983.526C869.42 981.541 870.952 979.535 872.452 977.517C872.671 977.214 872.9 976.91 873.13 976.606C874.772 974.372 876.392 972.116 877.989 969.838C878.351 969.307 878.723 968.786 879.084 968.255C880.693 965.923 882.291 963.591 883.845 961.216C916.854 910.945 935.864 853.343 939.322 793.549C939.946 782.703 931.147 773.604 920.181 773.604C915.102 773.604 910.473 775.567 907.036 778.788C903.6 782.02 901.356 786.489 901.061 791.521C900.535 800.285 899.638 808.983 898.368 817.606C897.832 821.217 897.23 824.818 896.573 828.397C895.906 831.977 895.183 835.534 894.395 839.081C893.607 842.627 892.754 846.152 891.845 849.666C890.926 853.169 889.952 856.651 888.912 860.122C886.844 867.052 884.534 873.896 881.973 880.642C880.704 884.015 879.369 887.366 877.979 890.685C848.735 960.457 793.925 1018.75 722.545 1051.62L722.512 1051.64C681.623 1070.46 637.856 1080 592.415 1080C421.932 1080 283.233 942.55 283.233 773.604C283.233 772.107 283.244 770.621 283.266 769.136V282.579C283.266 181.994 201.412 99.6304 100.799 98.9795C64.3427 98.7409 29.5721 108.936 0 127.884C51.7127 49.544 141.217 0 237.813 0H239.553C351.198 0.683429 447.893 66.4853 493.477 161.05C511.305 198.035 521.308 239.434 521.33 283.045V754.58C521.33 765.09 529.922 773.604 540.516 773.604H541.008C551.22 773.604 559.57 765.676 560.172 755.578C566.279 653.866 623.771 560.472 713.275 508.737C721.538 503.964 730.086 499.529 738.677 495.581C744.499 492.902 750.388 490.407 756.32 488.108C792.086 474.225 829.834 467.208 868.818 467.208C1039.3 467.208 1178 604.647 1178 773.604Z" fill="#FFFDE7"/>
                </g>
                <defs>
                    <clipPath id="clip0_708_2">
                        <rect width="1178" height="1080" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-white font-medium hover:text-accent"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            HOME
          </a>
          <a 
            href="#sobre" 
            className="text-white font-medium hover:text-accent"
            onClick={(e) => scrollToSection(e, 'sobre')}
          >
            SOBRE NÓS
          </a>
          <a 
            href="#hardware" 
            className="text-white font-medium hover:text-accent"
            onClick={(e) => scrollToSection(e, 'hardware')}
          >
            HARDWARE
          </a>
          <a 
            href="#suporte" 
            className="text-white font-medium hover:text-accent"
            onClick={(e) => scrollToSection(e, 'suporte')}
          >
            SUPORTE
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Campo de pesquisa expansível */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-opacity-90 bg-gray-900 p-4 z-50 shadow-lg transition-all duration-300">
          <form onSubmit={handleSearch} className="flex">
            <input
              id="search-input"
              type="text"
              placeholder="O que você está procurando?"
              className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-accent"
              autoFocus
            />
            <button 
              type="submit" 
              className="bg-accent text-gray-900 px-4 rounded-r hover:bg-opacity-90 transition-colors"
            >
              Buscar
            </button>
          </form>
        </div>
      )}

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-opacity-95 bg-gray-900 p-4 z-50 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-white font-medium hover:text-accent py-2 border-b border-gray-800"
              onClick={(e) => scrollToSection(e, 'home')}
            >
              HOME
            </a>
            <a 
              href="#sobre" 
              className="text-white font-medium hover:text-accent py-2 border-b border-gray-800"
              onClick={(e) => scrollToSection(e, 'sobre')}
            >
              SOBRE NÓS
            </a>
            <a 
              href="#hardware" 
              className="text-white font-medium hover:text-accent py-2 border-b border-gray-800"
              onClick={(e) => scrollToSection(e, 'hardware')}
            >
              HARDWARE
            </a>
            <a 
              href="#suporte" 
              className="text-white font-medium hover:text-accent py-2"
              onClick={(e) => scrollToSection(e, 'suporte')}
            >
              SUPORTE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
