export default function LordFilter({ showAllLords, showFreeLords, showTopYongLords }) {

    return (
        <form className="lord-filter d-flex">
            <div className="form-check">

                <input
                    id="all"
                    type="radio"
                    name="filter"
                    className="form-check-input"
                    onChange={showAllLords} />
                <label className="form-check-label" htmlFor="all">All Lords</label>
            </div>
            <div className="form-check">

                <input
                    id="free"
                    type="radio"
                    name="filter"
                    className="form-check-input"
                    onChange={showFreeLords} />
                <label className="form-check-label" htmlFor="free">Free Lords</label>
            </div>
            <div className="form-check">

                <input
                    id="yong"
                    type="radio"
                    name="filter"
                    className="form-check-input"
                    onChange={showTopYongLords} />
                <label className="form-check-label" htmlFor="yong">Top 10</label>
            </div>
        </form>
    );
}