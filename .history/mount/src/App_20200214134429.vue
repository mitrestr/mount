 <template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
      </aside>
      <div class="content">
      </div>
    </main>
  </div>
</template>


<style lang="pcss">


.root-wrapper-container {
  height: 100%;
}

.header-container {
  background: linear-gradient(to right, #3e3e59, #454573);
  padding: 15px 0;

}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.admin-wrapper {
  display: flex;
}
.maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

.content-container {
  background: url("~images/bg/admin.jpg") center center no-repeat / cover;
  flex: 1;
  padding-top: 60px;
 
}

.page-title {
  margin-bottom: 60px;
  font-size: 21px;
  font-weight: bold;
}
</style>
