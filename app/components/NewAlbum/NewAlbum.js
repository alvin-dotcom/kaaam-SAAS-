export default function NewAlbum({ customClasses }) {
	return (
		<div className={`flex flex-col items-center justify-center p-4${customClasses ? ` ${customClasses}` : ""}`}>
			<h4 className="text-white font-permanentMarker text-xl">Give it a try</h4>
			<h4 className="text-white font-rockSalt text-xl">kaam - </h4>
			<p className="text-fluo-green text-base">Only for SRM students</p>
		</div>
	);
}
