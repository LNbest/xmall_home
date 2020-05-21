<template>
  <v-container fluid class="fill-height deep-purple lighten-1">
    <v-row>
      <v-col md="auto" sm="auto" align-self="center" offset-md="3">
        Xmall购物商城
      </v-col>
      <v-col md="4" sm="8" offset-md="3" offset-sm="1">
        <v-card elevation="8" height="550px" shaped>
          <v-card-title style="height: 150px">
            <span class="mx-auto mt-12">欢迎登录</span>
          </v-card-title>
          <v-row justify="center">
            <v-col cols="10">
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user_in"
                    prepend-inner-icon="person"
                    placeholder="用户名或邮箱"
                    :rules="userRules"
                    outlined
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    prepend-inner-icon="lock"
                    placeholder="密码"
                    type="password"
                    :rules="passwordRules"
                    outlined
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-row justify="center">
                  <v-btn width="90%" color="deep-purple lighten-2">登录</v-btn>
                  <v-btn color="deep-purple lighten-2" text>忘记密码？</v-btn>
                </v-row>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoginIn",
  data: () => ({
    user_in: "",
    password: "",
    userRules: [v => !!v || "用户名不能为空"],
    passwordRules: [v => !!v || "密码不能为空"]
  })
};
</script>

<style scoped></style>
