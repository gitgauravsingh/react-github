import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Data,
  FooterData,
  IArticle,
  Ibanner,
  Ifeatres,
  Isearch,
} from "./Article";

export interface CounterState {
  data: Array<IArticle>;
  banner: Array<Ibanner>;
  featerbar: Array<Ifeatres>;
  footer: Array<FooterData>;
  search: Isearch | null;
  aboutp: Array<Data>;
  loading: boolean;
  error: boolean;
}
export const initialState: CounterState = {
  data: [],
  banner: [],
  featerbar: [],
  footer: [],
  search: null,
  aboutp: [],
  loading: false,
  error: false,
};

export const databar = createAsyncThunk("databar", async () => {
  const data = await fetch(
    "https://gitgauravsingh.github.io/nodeApi/Api/header.json"
  );
  return data.json();
});

export const bannerdata = createAsyncThunk("bannerdata", async () => {
  const banner = await fetch(
    "https://gitgauravsingh.github.io/nodeApi/Api/banner.json"
  );
  return banner.json();
});

export const featers = createAsyncThunk("featers", async () => {
  const featerbar = await fetch("http://localhost:7000/featers");
  return featerbar.json();
});

export const footerdata = createAsyncThunk("footerdata", async () => {
  const footer = await fetch("http://localhost:7000/footer");
  return footer.json();
});

export const searchdata = createAsyncThunk("searchdata", async () => {
  const search = await fetch(`https://dummyjson.com/products`);
  return search.json();
});

export const aboutpage = createAsyncThunk("aboutpage", async () => {
  const aboutp = await fetch(`http://localhost:7000/aboutp`);
  return aboutp.json();
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(databar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(databar.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(bannerdata.fulfilled, (state, action) => {
      state.banner = action.payload;
    });
    builder.addCase(featers.fulfilled, (state, action) => {
      state.featerbar = action.payload;
    });
    builder.addCase(footerdata.fulfilled, (state, action) => {
      state.footer = action.payload;
    });
    builder.addCase(searchdata.fulfilled, (state, action) => {
      state.search = action.payload;
    });
    builder.addCase(aboutpage.fulfilled, (state, action) => {
      state.aboutp = action.payload;
    });
    builder.addCase(databar.rejected, (state) => {
      state.error = true;
    });
  },
});

export default userSlice.reducer;
