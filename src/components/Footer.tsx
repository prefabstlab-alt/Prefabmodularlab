export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-slate-300">
      <div className="mx-auto grid max-w-content gap-6 px-4 py-12 text-sm md:grid-cols-2">
        <div>
          <p className="font-montserrat text-base font-semibold text-white">
            PREFAB STRUCTURE LAB
          </p>
          <p className="mt-2">아주대학교 프리팹 건축구조연구실</p>
          <p className="mt-4 leading-relaxed">
            경기도 수원시 영통구 월드컵로 206<br />
            아주대학교 산학협력원 804호 (우) 16499
          </p>
        </div>
        <div className="md:text-right">
          <p>Tel. 031-219-2499 &nbsp;·&nbsp; Fax. 031-219-2945</p>
          <p className="mt-1">bhcho@ajou.ac.kr</p>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Ajou University Prefab Structure Lab
          </p>
        </div>
      </div>
    </footer>
  );
}
