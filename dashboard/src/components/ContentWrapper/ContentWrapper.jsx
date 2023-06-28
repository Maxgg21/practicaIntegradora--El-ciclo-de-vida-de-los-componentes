import { ContentRowTop } from "../ContentRowTop/ContentRowTop";
import { Footer } from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import { Movies } from "../Movie/Movie";

export const ContentWrapper = () => {
      return (
            <>
                  {/* <!-- Content Wrapper --> */}
                  <div id="content-wrapper" className="d-flex flex-column">
                        {/* <!-- Main Content --> */}
                        <div id="content">
                              <TopBar />
                              <ContentRowTop />
                        </div>
                        <div>
                              <Movies />
                        </div>
                        {/* <!-- End of MainContent --> */}
                        <Footer />
                  </div>
                  {/* <!-- End of Content Wrapper --> */}
            </>
      );
};