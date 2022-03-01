function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="about" element={<About />} />
                    <Route path="page1" element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                    <Route path="page3" element={<Page3 />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}