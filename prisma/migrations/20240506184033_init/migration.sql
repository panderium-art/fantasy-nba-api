-- CreateTable
CREATE TABLE "teams" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "team_name" TEXT NOT NULL,
    "wins" SMALLINT DEFAULT 0,
    "losses" SMALLINT DEFAULT 0,
    "win_loss_ratio" SMALLINT,
    "home_city" TEXT,
    "home_arena" TEXT,
    "championships_amount" SMALLINT DEFAULT 0,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
